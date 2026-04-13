export default function Menu({menuItems}){
    return (
        <section>
        <h2>Menu</h2>
        <ul>
        {menuItems.map(item => <li key={item.id}>{item.name} | ${item.price}</li>)}
        </ul>
    </section>
    )
}