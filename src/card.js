function CardUI(props) {
    return 
        (
        <div class="card" style={{width:'350'}}>
            <img src = "image.png" width={300}
            style={{border:'10px solid #FF000',borderRadius:'50px'}}></img>
            <div class="card-body">
                <h3>{props.program}</h3>
                <h3>{props.user.branch}</h3>
                <h4>{props.user.year}</h4>
                <h4>{props.user.college}</h4>
                <button type="button" class="btn btn-primary">Button</button>
            </div>
        </div>
    );
}
export default CardUI
