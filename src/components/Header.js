
function Header({title, count}) {
  return (
    <header
        className ='header'
        >
        <h1>
            {title}
        </h1>
        <h2>
          {count} tasks left
        </h2>
        </header>
  )
}

export default Header