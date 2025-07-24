import { User, Briefcase, GraduationCap, Code, FolderOpen, Mail } from 'lucide-react';

interface CVSidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const navItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function CVSidebar({ activeSection, onSectionClick }: CVSidebarProps) {
  return (
    <nav className="fixed left-0 top-0 h-full w-20 cv-nav flex flex-col items-center py-8 z-40">
      <div className="mb-8">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center animate-pulse-glow">
          <img src="/public/favicon.svg" alt="Logo" className="w-10 h-10" />
        </div>
      </div>
      
      <div className="flex flex-col space-y-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionClick(item.id)}
              className={`
                w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group relative
                ${isActive 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }
              `}
              title={item.label}
            >
              <Icon size={20} />
              
              {/* Tooltip */}
              <div className="absolute left-16 bg-card text-card-foreground px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {item.label}
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-card rotate-45"></div>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}