function DatingProfile(props) {
    return(
<div>
    <img src={props.img} alt="a man" width= "300px" />
    <h1>{props.name}</h1>
    <p>{props.age}</p>
    <p>{props.description}</p>
</div>
    )
}

export default DatingProfile;