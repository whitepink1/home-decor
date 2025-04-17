
const Pagination = ({page, total, resultPageQuantity, isPage, isResult}) => {
    return(<>
    {total > resultPageQuantity && !isResult  ?
    <div>no pages</div>
    :
    <div>
        Le go
    </div>
    }</>)
}

export default Pagination;