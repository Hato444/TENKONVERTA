// Update Checker
// TENKONVERTA is a locally rebranded build, so the upstream ArcDLP release
// feed is intentionally not used here. To enable update checks, point these
// constants at your own repository.

const { log } = require('./utils');

const GITHUB_OWNER = null;
const GITHUB_REPO = null;

async function checkForUpdates() {
    if (!GITHUB_OWNER || !GITHUB_REPO) {
        log('Update checks disabled for this TENKONVERTA build');
        return { hasUpdate: false, disabled: true };
    }

    return { hasUpdate: false, disabled: true };
}

module.exports = { checkForUpdates };
