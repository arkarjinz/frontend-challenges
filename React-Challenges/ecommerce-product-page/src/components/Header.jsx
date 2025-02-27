function Header() {
    const nav_links = [
        {
            url: "#",
            name: "Collections"
        },
        {
            url: "#",
            name: "Men"
        },
        {
            url: "#",
            name: "Women"
        }, {
            url: "#",
            name: "About"
        }, {
            url: "#",
            name: "Contact"
        }


    ]
    return (
        <>
            <header className="flex justify-between border-b-2 border-b-gray-200 py-8 w-6xl mx-auto">
                <div className="flex items-center gap-16">
                    <img src="/images/logo.svg" alt="logo"/>
                    <ul className="flex gap-9">
                        {
                            nav_links.map((nav, index) => {
                                return (
                                    <li key={index}><a className="font-kumbh text-dark-grayish-blue" href={nav.url}>{nav.name}</a>
                                    </li>)

                            })
                        }
                    </ul>
                </div>
                <div className="flex gap-9 items-center">
                    <a href="#"><img src="/images/icon-cart.svg" alt="icon"/></a>
                    <a href="#"><img className="w-1/3" src="/images/image-avatar.png" alt="img"/></a>
                </div>
            </header>
        </>
    )
}

export default Header
