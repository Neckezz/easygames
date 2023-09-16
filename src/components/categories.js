const Categories = () => {
  const handleClick = () => {
    const elements = document.querySelectorAll('div > .id');
    console.log(elements)
    elements.forEach(element => {
      const innerHTMLValue = parseInt(element.innerHTML);

      if (innerHTMLValue > 5) {
        element.remove(); // Not working for now
      }
    });
  };
    return ( 
        <nav>
          <li onClick={handleClick}><a>Consoles and PC</a></li>
          <li onClick={handleClick}><a>Playstation 5 games</a></li>
          <li onClick={handleClick}><a>Xbox games</a></li>
          <li onClick={handleClick}><a>Nintendo Switch</a></li>
          <li onClick={handleClick}><a>PC Games</a></li>
        </nav>
     );
}
 
export default Categories;