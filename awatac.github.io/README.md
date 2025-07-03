# awatac/awatec

This repository contains the source code and automation workflows for the awatac website and related assets.

## Project Overview
- **Purpose:** Central repository for website code, assets, and automation.
- **Automation:** Uses GitHub Actions to sync repository contents automatically on every push to the `main` branch.

## GitHub Actions: Sync to Website Workflow

This repository includes a workflow at `.github/workflows/sync-to-website.yml` that:
- Clones the repository into a subfolder (`awatac/`)
- Syncs all files (excluding `.git` and the workflow file itself) into the subfolder
- Commits and pushes changes back to the `main` branch

### Workflow Setup
1. **Personal Access Token (PAT):**
   - Create a PAT with `repo` permissions from a user with write access to this repository.
   - Add it as a secret named `AWATAC_REPO_PAT` in the repository settings under Settings → Secrets and variables → Actions.

2. **How it works:**
   - On every push to `main`, the workflow will run and sync the repository contents as described above.

### Example Workflow Snippet
```yaml
- name: Clone target (awatac/awatec)
  run: |
    git clone https://x-access-token:${{ secrets.AWATAC_REPO_PAT }}@github.com/awatac/awatec.git awatac
- name: Sync files (excluding .git and workflow file)
  run: |
    rsync -av \
      --exclude='.git' \
      --exclude='.github/workflows/sync-to-website.yml' \
      ./ awatac/
    cd awatac
    git add .
    git commit -m "Auto-sync from awatac/awatec" || echo "No changes to commit"
    git push origin main
```

## Contributing
- Fork the repository and create a pull request for any changes.
- For workflow or automation changes, update the relevant files in `.github/workflows/`.

## License
This project is licensed under the MIT License.