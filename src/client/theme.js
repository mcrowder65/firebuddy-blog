export const theme = {
  sizes: {
    xs: 576,
    s: 768,
    m: 992,
    l: 1200,
  },
  palette: {
    accent: "rgba(86, 161, 201, 1)",
  },
  mq: (size = "xs") => {
    if (typeof size === "string") {
      return `@media (max-width: ${theme.sizes[size]}px)`
    } else {
      return `@media (max-width: ${size}px)`
    }
  },
}
