import Badge from '@/components/badge';
import TeamCard from '@/components/cards/team-card';

const TeamsSection = ({
    title,
    description,
    teams
}: {
    title: string;
    description?: string;
    teams: {
        name: string;
        description: string;
        imageUrl: string;
    }[];
}) => {
    return (
        <section
            id='teams-section'
            className='flex flex-col gap-10 md:px-40 px-10'>
            <div className='flex flex-col gap-4'>
                <Badge text={title} />
                <h4 className='md:text-5xl text-4xl font-bold uppercase'>
                    {/* Get to know the dedicated team behind WIE ACT 3.0 */}
                    {description ?? ''}
                </h4>
            </div>
            <div className='flex md:flex-wrap md:flex-row flex-col md:items-start items-center md:justify-between gap-10'>
                {teams.map((team, index) => (
                    <TeamCard
                        key={index}
                        name={team.name}
                        description={team.description}
                        imageUrl={team.imageUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default TeamsSection;
