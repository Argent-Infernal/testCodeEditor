import { Dispatch, SetStateAction } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";

interface SelectCompProps {
    language: string,
    setLanguage: Dispatch<SetStateAction<string>>,
    theme: string,
    setTheme: Dispatch<SetStateAction<string>>,
}

export function SelectBlock({language, setLanguage, theme, setTheme}: SelectCompProps) {
    return (
        <div className="flex flex-row gap-5 mb-5">
            <div className="w-full">
                <Label>Язык</Label>
                <Select onValueChange={(value)=>setLanguage(value)} value={language}>
                    <SelectTrigger>
                        <SelectValue placeholder='Выберите язык' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Язык</SelectLabel>
                            <SelectItem value="javascript">JavaScript</SelectItem>
                            <SelectItem value="typescript">TypeScript</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="w-full">
                <Label>Тема</Label>
                <Select onValueChange={(value)=>setTheme(value)} value={theme}>
                    <SelectTrigger>
                        <SelectValue placeholder='Выберите тему' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Тема</SelectLabel>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="vs-dark">Vs-Dark</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}