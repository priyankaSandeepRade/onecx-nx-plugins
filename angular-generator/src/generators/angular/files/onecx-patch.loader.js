/**
 * Candidate A: OneCX-specific Rspack source patch loader.
 *
 * Wired from rspack.config.js into the Rspack module rule pipeline for `.ts` files.
 * The source patching itself plugs in here; until that transformation is finalized the
 * loader is a passthrough so it is safely wired without altering the build output.
 *
 * @param {string} source
 * @returns {string}
 */
function onecxPatchLoader(source) {
  return source;
}

module.exports = onecxPatchLoader;
