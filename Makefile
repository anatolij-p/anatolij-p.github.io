.PHONY: serve build deploy clean-deploy-worktree

PORT ?= 8000
DEPLOY_BRANCH := gh-pages
DEPLOY_DIR ?= .deploy-worktree
DEPLOY_MESSAGE ?= deploy: update github pages

serve:
	@printf "Serving static site at http://localhost:$(PORT)/\n"
	python3 -m http.server $(PORT)

build:
	python3 scripts/build-assets.py

clean-deploy-worktree:
	@if [ -d "$(DEPLOY_DIR)" ]; then \
		git worktree remove --force "$(DEPLOY_DIR)"; \
	fi

deploy: build
	@if [ "$(DEPLOY_BRANCH)" != "gh-pages" ]; then \
		printf "Deploy aborted: DEPLOY_BRANCH must be gh-pages.\n"; \
		exit 1; \
	fi
	@if [ -n "$$(git status --porcelain)" ]; then \
		printf "Deploy aborted: working tree must be clean.\n"; \
		exit 1; \
	fi
	@$(MAKE) clean-deploy-worktree
	@git fetch origin $(DEPLOY_BRANCH) || true
	@if git show-ref --verify --quiet refs/remotes/origin/$(DEPLOY_BRANCH); then \
		git worktree add "$(DEPLOY_DIR)" origin/$(DEPLOY_BRANCH); \
	else \
		git worktree add -b "$(DEPLOY_BRANCH)" "$(DEPLOY_DIR)" HEAD; \
	fi
	@cd "$(DEPLOY_DIR)" && git rm -r --ignore-unmatch . >/dev/null 2>&1 || true
	@mkdir -p "$(DEPLOY_DIR)/css" "$(DEPLOY_DIR)/js" "$(DEPLOY_DIR)/img"
	@rsync -av index.html CNAME robots.txt favicon.ico cv.md "$(DEPLOY_DIR)/"
	@rsync -av css/style.min.css "$(DEPLOY_DIR)/css/"
	@rsync -av js/index.min.js "$(DEPLOY_DIR)/js/"
	@cp img/1334_logo.png img/thumbnail.jpg "$(DEPLOY_DIR)/img/"
	@cd "$(DEPLOY_DIR)" && git add . && \
		if git diff --cached --quiet; then \
			printf "No deploy changes.\n"; \
		else \
			git commit -m "$(DEPLOY_MESSAGE)" && git push origin HEAD:$(DEPLOY_BRANCH); \
		fi
	@git worktree remove "$(DEPLOY_DIR)"
