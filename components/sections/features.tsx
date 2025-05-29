export function Features() {
    const imagePath = './bg-game.png'
    return (
        <div id="game" className="relative h-175">
            <div
                style={{ backgroundImage: `url(${imagePath})` }}
                className="absolute inset-0 mx-auto mt-8 pt-8 bg-cover bg-center"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/100 to-transparent"></div>

                <div className="relative z-10 p-8 text-white ml-auto w-3/5">
                    <h2 className="text-4xl font-bold">THE GAME</h2>
                    <p className="mt-8 text-balance font-semibold text-xl">
                        Peridonia was once a peaceful place, until an enigmatic magical fog called the Miasma blanketed the world.
                        The Miasma kills or corrupts all living matter.
                        To fight the monsters that now inhabit the deadly haze, a new kind of hero answered the call.
                        The Adventurers Guild, led by Mattorigus, built magical suits of armor called Robots.
                        Help your friends in fighting back the Miasma as Robots, or become the Monster to corrupt all.
                    </p>
                    <ul className="ps-6 mt-4 space-y-1 list-disc list-inside font-semibold text-xl">
                        <li>
                            Raid the dungeon or be the monster
                        </li>
                        <li>
                            1-4 Players, co-operative or solo play
                        </li>
                        <li>
                            Full game included
                        </li>
                        <li>
                            Compatible with future products
                        </li>
                        <li>
                            Customise decks with loot, augments and abilities
                        </li>
                        <li>
                            Suitable for new and advanced players
                        </li>
                        <li>
                            Over 5000 adventures!
                        </li>
                    </ul>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
            </div>
        </div>
    )
};