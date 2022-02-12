export default function HandleArrow({ nextpage, prevpage }) {
    document.addEventListener('keydown', (e) => {
        e.keyCode === 37 && prevpage()
        e.keyCode === 39 && nextpage()
    })
    return (
        null
    )
}
