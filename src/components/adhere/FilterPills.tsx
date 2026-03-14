interface FilterPillsProps {
  filters: string[];
  active: string;
  onChange: (filter: string) => void;
}

const FilterPills = ({ filters, active, onChange }: FilterPillsProps) => (
  <div className="flex gap-2 overflow-x-auto -mx-5 px-5 pb-1 scrollbar-hide">
    {filters.map((f) => (
      <button
        key={f}
        onClick={() => onChange(f)}
        className={`flex-shrink-0 rounded-full px-4 py-2 text-[12px] font-semibold transition-all duration-200 active:scale-95 ${
          active === f
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-muted text-muted-foreground hover:bg-muted/70"
        }`}
      >
        {f}
      </button>
    ))}
  </div>
);

export default FilterPills;
