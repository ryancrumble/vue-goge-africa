const baseColors = {
  stormGrey: '#5C5C5C',
  grey: '#808080',
  error404: '#404040',

  tomasWithAnAccentOnTheA: '#9d5400',
  halloween: '#d87300',
  monarch: '#FF8A00',
  peachySkies: '#ffb866',
  pastelKiss: '#ffdbb3',

  lorange: '#FFC000',
  yeetusMyFeetus: '#ffedb8',
  sushiRice: '#fff7df',
}

const colors = {
  primary: baseColors.monarch,
  'primary-light': baseColors.peachySkies,
  'primary-lightest': baseColors.pastelKiss,
  'primary-dark': baseColors.halloween,
  'primary-darkest': baseColors.tomasWithAnAccentOnTheA,

  secondary: baseColors.lorange,
  'secondary-light': baseColors.yeetusMyFeetus,
  'secondary-lightest': baseColors.sushiRice,

  'grey-one': baseColors.stormGrey,
  'grey-light': baseColors.grey,
  'grey-dark': baseColors.error404,
}

module.exports = colors
