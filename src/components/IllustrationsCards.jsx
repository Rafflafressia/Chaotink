const illustrations = [{
    imageUrl: 'src/assets/IMG-20240404-WA0001.jpg',
},
{
    imageUrl: 'src/assets/IMG-20240404-WA0003.jpg',
},
{
    imageUrl: 'src/assets/IMG-20240408-WA0006.jpg',
},
{
    imageUrl: 'src/assets/IMG-20240408-WA0010.jpg',
},
{
    imageUrl: 'src/assets/IMG-20240409-WA0000.jpg',
},
{
    imageUrl: 'src/assets/IMG-20240409-WA0004.jpg',
},
{
    imageUrl: 'src/assets/IMG-20240418-WA0002.jpg',
},
{
    imageUrl: 'src/assets/IMG-20240418-WA0007.jpg',
}
];

const IllustrationsCards = () => {
    return (
        <div className="illustrations-cards flex flex-wrap flex-row justify-center">
            {illustrations.map((illustration, index) => (
                <div key={index} className="illustrations-card flex-row my-4 mx-4 space-x-2">
                    <div className="projImg">
                        <img src={illustration.imageUrl} alt={`Illustration ${index}`} className="w-[150px] lg:w-[200px]"/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IllustrationsCards;