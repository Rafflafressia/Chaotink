const illustrations = [{
    imageUrl: 'https://via.placeholder.com/150',
},
{
    imageUrl: 'https://via.placeholder.com/150',
},
{
    imageUrl: 'https://via.placeholder.com/150',
},
{
    imageUrl: 'https://via.placeholder.com/150',
},
{
    imageUrl: 'https://via.placeholder.com/150',
},
{
    imageUrl: 'https://via.placeholder.com/150',
},
];

const IllustrationsCards = () => {
    return (
        <div className="illustrations-cards flex flex-wrap flex-row justify-center">
            {illustrations.map((illustration, index) => (
                <div key={index} className="illustrations-card flex-row my-4 mx-4 space-x-2">
                    <div className="projImg">
                        <img src={illustration && illustration.imageUrl} alt={illustration && illustration.title} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IllustrationsCards;