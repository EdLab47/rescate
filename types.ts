export interface SlideContent {
  id: number;
  title: string;
  content: string;
}

export interface ChecklistItem {
  id: number;
  text: string;
}

export interface Rule {
  title: string;
  description: string;
  iconType: 'alert' | 'info' | 'check' | 'edit' | 'layout';
}