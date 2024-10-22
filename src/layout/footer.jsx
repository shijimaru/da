function Footer() {
    return (
        <footer class="page-footer teal lighten-1">
            <div className="footer-copyrigth">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">REPO</a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }