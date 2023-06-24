const Section = (props) => {
    console.log(props)
	return (
		<main>
			{props.json.map((element, index) => {
				return (
					<section key={index}>
						<p className="title">{element.category}</p>
						<div className="slider">
							{element.images.map((image, index) => {
								return <img src={image} key={index} />;
							})}
						</div>
					</section>
				);
			})}
		</main>
	);
}

export default Section;
