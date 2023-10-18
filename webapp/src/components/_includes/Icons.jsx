export const CloseIcon = (props) =>  <svg viewBox="0 0 24 24" fill="none" version="1.1" onClick={props.handleClick} xmlns="http://www.w3.org/2000/svg">
		<line className="vector" x1="8.3" y1="8.3" x2="15.7" y2="15.8"/>
		<line className="vector" x1="8.3" y1="15.7" x2="15.7" y2="8.2"/> 
        </svg>

export const MenuIcon = (props) => <svg viewBox="0 0 24 24" fill="none" version="1.1" onClick={props.handleClick} xmlns="http://www.w3.org/2000/svg">
    <line className="vector" x1="6.7" y1="10.4" x2="17.3" y2="10.4"/>
	<line className="vector" x1="6.7" y1="13.6" x2="17.3" y2="13.6"/>
 </svg>


export const Icons = {
    Lose: CloseIcon,
    Menu: MenuIcon
}


