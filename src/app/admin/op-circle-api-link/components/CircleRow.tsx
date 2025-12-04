import { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Circle } from '../types';

interface CircleRowProps {
    circle: Circle;
    circleCode?: string;
    onCircleCodeChange: (circleId: string, code: string) => void;
}

export function CircleRow({
    circle,
    circleCode = '',
    onCircleCodeChange
}: CircleRowProps) {
    const [localCode, setLocalCode] = useState(circleCode);
    const [isModified, setIsModified] = useState(false);

    useEffect(() => {
        setLocalCode(circleCode);
        setIsModified(false);
    }, [circleCode]);

    const handleCodeChange = (value: string) => {
        setLocalCode(value);
        setIsModified(true);
    };

    const handleSave = () => {
        onCircleCodeChange(circle.id, localCode);
        setIsModified(false);
    };

    return (
        <div className="flex items-center gap-2">
            <Input
                value={localCode}
                onChange={(e) => handleCodeChange(e.target.value)}
                className="max-w-[120px]"
                placeholder="Circle Code"
            />
            {isModified && (
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSave}
                >
                    <Save className="h-4 w-4" />
                </Button>
            )}
        </div>
    );
} 