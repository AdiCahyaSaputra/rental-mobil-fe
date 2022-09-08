// Components
import Logo from "components/reusable/Logo"

const ImagePlaceholder: React.FC = () => {
  return (
    <div className="relative -z-10 aspect-video bg-black flex justify-center items-center">
      <div className="group-hover:scale-100 scale-75">
        <Logo />
      </div>
    </div>
  )
}

export default ImagePlaceholder
