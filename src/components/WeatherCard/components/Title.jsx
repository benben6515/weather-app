// style
// const wrapperClass = "base-card text-light-400 flex flex-col gap-4"

const Title = ({name, name_zh }) => {
  return (
    <div>
      <span className="">{name}</span>
      {!!name_zh &&
        <span className="text-lg"> ( {name_zh} ) </span>
      }
    </div>
  )
}

export default Title
