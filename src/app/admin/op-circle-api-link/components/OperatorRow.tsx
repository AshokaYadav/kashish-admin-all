import { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Operator } from '../types';

interface OperatorRowProps {
    operator: Operator;
    operatorCode?: string;
    onOperatorCodeChange: (operatorId: string, code: string) => void;
}

export function OperatorRow({
    operator,
    operatorCode = '',
    onOperatorCodeChange
}: OperatorRowProps) {
    const [localCode, setLocalCode] = useState(operatorCode);
    const [isModified, setIsModified] = useState(false);

    useEffect(() => {
        setLocalCode(operatorCode);
        setIsModified(false);
    }, [operatorCode]);

    const handleCodeChange = (value: string) => {
        setLocalCode(value);
        setIsModified(true);
    };

    const handleSave = () => {
        onOperatorCodeChange(operator.id, localCode);
        setIsModified(false);
    };

    return (
        <div className="flex items-center gap-2">
            <Input
                value={localCode}
                onChange={(e) => handleCodeChange(e.target.value)}
                className="max-w-[120px]"
                placeholder="Operator Code"
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