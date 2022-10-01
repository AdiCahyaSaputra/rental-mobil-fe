// Components
import Logo from "components/reusable/global/Logo"
import Container from "components/reusable/global/Container"
import FooterItem from "components/reusable/footer/FooterItem"
import GithubInfo from "components/reusable/footer/GithubInfo"

const layananLainnyaItems = [
  { label: 'FAQ', link: '/faq' },
  { label: 'Bug Report', link: '/bug' },
]

const resourcesItems = [
  { label: 'Hero Icons', link: 'https://heroicons.com/' },
  { label: 'Feather Icons', link: 'https://feathericons.com/' },
]

const FooterSection: React.FC = () => {

  return (
    <footer className="h-screen select-none relative bg-black">

      <Container>
        <div className="space-y-6 md:space-y-0 text-white p-4 grid grid-cols-12 gap-4">

          <div className="md:col-span-4 col-span-12">
            <h1 className="text-xl font-extrabold">Tentang Kami</h1>

            <GithubInfo user='AdiCahyaSaputra' link="https://github.com/AdiCahyaSaputra" />
            <GithubInfo user='26kito' link="https://github.com/26kito" />
          </div>

          <FooterItem title="Layanan Lainnya" items={layananLainnyaItems} />
          <FooterItem title="Resources" items={resourcesItems} />

          <div className="absolute bottom-0 inset-x-0 flex items-center space-x-4 col-span-12 justify-center">
            <h1 className="text-sm font-bold">©2022 - Rental Mobil</h1>
            <div className="scale-75">
              <Logo />
            </div>
          </div>

        </div>
      </Container>

    </footer>
  )
}

export default FooterSection
