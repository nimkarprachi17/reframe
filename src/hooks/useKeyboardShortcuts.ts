import { useEffect } from "react";
<<<<<<< HEAD
import { EditRecipe, ExportStatus } from "@/lib/types";
=======
import { EditRecipe, DEFAULT_RECIPE, ExportStatus } from "@/lib/types";
>>>>>>> a5912e2 (feat: implement keyboard shortcuts (Ctrl+Shift+E, M, R, 1-9, Esc) - closes #849)
import { PRESETS } from "@/lib/presets";

interface UseKeyboardShortcutsProps {
  file: File | null;
  recipe: EditRecipe;
  resetSettings: () => void;
<<<<<<< HEAD
  updateRecipe: (recipe: Partial<EditRecipe>) => void;
=======
  updateRecipe: (recipe: Partial<EditRecipe>) => void;  
>>>>>>> a5912e2 (feat: implement keyboard shortcuts (Ctrl+Shift+E, M, R, 1-9, Esc) - closes #849)
  handleExport: () => void;
  status: ExportStatus;
  cancelExport: () => void;
  onToggleShortcutsModal: () => void;
}

export function useKeyboardShortcuts({
  file,
  recipe,
  resetSettings,
  updateRecipe,
  handleExport,
  status,
  cancelExport,
  onToggleShortcutsModal,
}: UseKeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) return;

      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const isCtrlOrCmd = isMac ? e.metaKey : e.ctrlKey;

      if (isCtrlOrCmd && e.shiftKey && e.key === "E") {
        e.preventDefault();
        e.stopPropagation();   // ← add this
        if (file && status === "idle") handleExport();
        return;
<<<<<<< HEAD
      }
=======
    }
>>>>>>> a5912e2 (feat: implement keyboard shortcuts (Ctrl+Shift+E, M, R, 1-9, Esc) - closes #849)

      if (!file) return;

      switch (e.key) {
        case "m":
        case "M":
          updateRecipe({ keepAudio: !recipe.keepAudio });
          break;

        case "r":
        case "R":
          resetSettings();
          break;

        case "Escape":
          if (status === "exporting") cancelExport();
          break;

        case "?":
          onToggleShortcutsModal();
          break;

        default:
          if (e.key >= "1" && e.key <= "9") {
            const index = parseInt(e.key) - 1;
            if (PRESETS[index]) {
              updateRecipe({ preset: PRESETS[index].id });
            }
          }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
<<<<<<< HEAD
  }, [file, recipe, resetSettings, updateRecipe, handleExport, status, cancelExport, onToggleShortcutsModal]);
=======
  }, [file, recipe, updateRecipe, handleExport, status, cancelExport, onToggleShortcutsModal]);
>>>>>>> a5912e2 (feat: implement keyboard shortcuts (Ctrl+Shift+E, M, R, 1-9, Esc) - closes #849)
}