export default interface NavItemInterface {
  name: string,
  link: string,
  icon: JSX.Element,
  textColor?: string | null,
  customHandler?: Function | null
}
