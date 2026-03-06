interface SectionHeadingProps {
    titleMain: string
    titleGradient: string
    description?: string
    mainColorClass?: string
    isReverse?: boolean
}

export default function SectionHeading({
                                           titleMain,
                                           titleGradient,
                                           description,
                                           mainColorClass = "text-white",
                                           isReverse = false // Sử dụng prop này
                                       }: SectionHeadingProps) {
    return (
        <div className={`${description ? "mb-10" : ""}  text-center`}>
            <h2 className={`text-3xl md:text-5xl font-bold leading-tight ${mainColorClass}`}>
                {isReverse ? (
                    <>
                        {titleMain} <span className="text-gradient-brand">{titleGradient}</span>
                    </>
                ) : (
                    <>
                        <span className="text-gradient-brand">{titleGradient}</span> {titleMain}
                    </>
                )}
            </h2>

            {description && (
                <p className={`mt-4 ${mainColorClass} text-sm md:text-base opacity-80`}>
                    {description}
                </p>
            )}
        </div>
    )
}