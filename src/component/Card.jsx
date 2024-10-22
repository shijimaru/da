function Card(props) {
    const {
        Title: title,
        Year: year,
        imbdID: id,
        Type: type,
        Poster: poster
    } = props

    return <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={poster}/>
          <span class="card-title">{title}</span>
        </div>
        <div class="card-content">
          <p>{type}</p>
          <p>year: {year}</p>
          <p>id: {id}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
}

export { Card }