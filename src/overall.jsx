  // Code to split among components
  <Card>
    <Image src={props.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Description>
        {props.explanation}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        Photo of the Day - Nasa
    </Card.Content>
  </Card>