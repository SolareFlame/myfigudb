import {
    Character, Editor,
    Figure,
    FigureCharacter,
    FigureImage,
    FigureReseller,
    License,
    Reseller,
    Series
} from "@prisma/client";

export function toFigureDTO(figure: Figure & {
    FigureImage: FigureImage[]
    characters: (FigureCharacter & {
        character: Character & {
            licence: License | null
        }
    })[]
    figureResellers: (FigureReseller & {
        reseller: Reseller
    })[]
    series?: Series | null
    editor?: Editor | null
}) {
    return {
        id: figure.id,
        name: figure.name,
        size: figure.size,
        release_date: figure.release_date,
        color: figure.color,
        series: figure.series
            ? {
                id: figure.series.id,
                name: figure.series.name,
            }
            : null,
        editor: figure.editor
            ? {
                id: figure.editor.id,
                name: figure.editor.name,
            }
            : null,
        images: figure.FigureImage.map((img) => ({
            key: img.key,
            priority: img.priority,
            size: img.size,
            height: img.height,
        })),
        characters: figure.characters.map((fc) => ({
            id: fc.character.id,
            name: fc.character.name,
            license: fc.character.licence
                ? {
                    id: fc.character.licence.id,
                    name: fc.character.licence.name,
                }
                : null,
        })),
        resellers: figure.figureResellers.map((fr) => ({
            id: fr.reseller.id,
            name: fr.reseller.name,
            href: fr.reseller.href,
            price: fr.price,
            ref: fr.ref,
            status: fr.status,
        })),
    }
}
