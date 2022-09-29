export default interface NavItemInterface {
  name: string,
  link: string,
  icon: JSX.Element,
  active?: string,
  textColor?: string | null,
  customHandler?: Function | null
}
