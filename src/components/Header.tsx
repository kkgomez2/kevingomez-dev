import WordSpan from "./wordSpan"

const Header = () => {
  return (
    <div className="header">
    <div className="logo">
      <div className="name">Kevin K Gomez</div>
      <div className="sentence">
        is a <WordSpan word={"software"} />
        &nbsp;developer
      </div>
    </div>
  </div>
  )
}

export default Header