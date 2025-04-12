import css from './LoadMoreBtn.module.css'

export default function LoadMoreBnt ({onClick}) {
    return (
        <button className={css.loadMoreBtn} onClick={onClick}>Load More</button>
    )
}