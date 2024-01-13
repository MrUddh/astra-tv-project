import s from "../styles/components/chip.module.css";

interface ChipProps {
  label: string;
}

const Chip: React.FC<ChipProps> = ({ label }) => {
  return <div className={s.chip}>{label}</div>;
};

export default Chip;
