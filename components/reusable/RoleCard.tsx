type Props = {
  role_name: string,
  role_desc: string,
  role_selected: string,
  clickHandler: any
}

const RoleCard: React.FC<Props> = ({ role_name, role_desc, role_selected, clickHandler }) => {
  return (
    <div onClick={clickHandler} className={`cursor-pointer py-2 px-4 bg-black/80 ${role_selected === role_name && 'border-2 border-green-600'}`}>
      <h4 className="text-lg font-bold text-white">{role_name}</h4>
      <p className="text-xs font-light text-white">{role_desc}</p>
    </div>
  )
}

export default RoleCard
