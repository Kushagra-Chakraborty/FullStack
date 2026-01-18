const Header = ({ title }) => {
    return (
        <header style = {{ backgroundColor: '#4CAF50', padding: '1rem', color: 'white', textAlign: 'center' }}>
        <h1>{title}</h1>
        </header>
    )
}

export default Header;