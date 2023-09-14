/** Transforms the given font into the small caps version. */
// NOTE(dabrady) This is highly specific to the way I've named my fonts.
export default function smallCaps(font) {
  return function({ fonts }) {
    var [intendedFont, ...fallbacks] = fonts[font].split(", ");
    return `${intendedFont.replace(/-t(\d)/, "-c$1")}, ${fallbacks}`;
  };
}
