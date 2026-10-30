export function Footer() {
    
    return(
        <footer className="py-8 bg-gradient-to-t from-green-100 to-transparent">
            <div className="container mx-auto px-2 text-center">
                <p className="text-sm text-gray-600">
                    <span className="font-semibold ">Betül Güleç tarafından yapılmıştır</span>
                    <span className="mx-2">©</span>
                    {new Date().getFullYear()} Tüm Hakları Saklıdır.
                </p>
            </div>
        </footer>

    )
}