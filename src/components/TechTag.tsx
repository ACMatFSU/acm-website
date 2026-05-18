interface TechTagProps {
    label: string;
}

export default function TechTag({ label }: TechTagProps) {
    return(
        <span className ="tag bg-ink text-chalk">
            {label.toUpperCase()}
        </span>
    );
}