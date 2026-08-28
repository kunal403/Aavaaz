"use client";

import { Coins } from "lucide-react";
import{useState} from "react";
import{useRouter} from "next/navigation";
import{Button} from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

import { 
  TEXT_MAX_LENGTH
} from "@/features/text-to-speech/data/constants";
import router from "next/router";


export function TextInputPanel() {
    const [text, setText] = useState("");
    const router = useRouter();

    const handleGenerate = () =>{
        const trimmed = text.trim();
        if(!trimmed) return ;
        router.push(`/text-to-speech? text = ${encodeURIComponent(trimmed)}`);
    };

    return(
        <div className="
        rounded-[22px] bg-linear-185 from-[#ff8ee3] from-15% via-[#57d7e0] via-39% to-[#dbf1f2] to-85% p-0.5 shadow-[0_0_0_4px_white]
        ">
            
        <div className= "rounded-[20px] bg-[#F9F9F9] p-1">
            <div className= "spce-y-4 rounded-2xl bg-white p-4 drop-shadow-xs">   
                <Textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="start typing or paste your text here..."
                    className="min-h-35 resize-none border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
                    maxLength={TEXT_MAX_LENGTH}
                />
            </div>
        </div>
        </div>
    )

};