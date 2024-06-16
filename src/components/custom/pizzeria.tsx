import { Badge, Card, Group, Text, Rating, Stack, ActionIcon, Button } from "@mantine/core";
import { MdDirections } from "react-icons/md";

export interface PizzeriaItemProps {
    pizzeria: {
        name: string;
        rating: number;
        mustTry: string;
        city: string;
        nation: string;
        locationUrl: string;
        websiteUrl: string;
        coords: number[];
    },
    isNearby?: boolean,
    distanceMt?: number
}


export const PizzeriaItem = function (props: PizzeriaItemProps) {
    const data = props.pizzeria
    return <Card shadow="sm" padding="sm" radius="md" w={props.isNearby ? "60vw" : "40vw"} miw={"400px"} maw={"800px"} withBorder>
        <Stack gap={40}>
            <Group justify="space-between">
                <Group>
                <Text size="24px" ff={"text"} c={props.isNearby ? "red" : "white"} fw={props.isNearby ? "bold" : 200}>{data.name}</Text>
                {props.isNearby && <Text size="12px" ff={"text"} c={"white"} fw={props.isNearby ? "bold" : 200}>Only {Math.round(props.distanceMt!)} meters away from you!</Text>}
                </Group>
                <Stack align="center">
                    <Rating value={data.rating / 2} fractions={2} readOnly />
                    <Text c="white" size="xs" fw={500}>{data.rating}/10</Text>
                </Stack>
            </Group>
            <Group align="center" justify="space-between">
                <Group gap={5}>
                <Text c="white" size="sm" fw={500}>You must try:</Text>
                <Text c="red" size="sm" fw={500}>{data.mustTry}</Text>
                </Group>
                <Stack align="center" justify="center">
                    <Button color="yellow" rightSection={<MdDirections size={14} />}>Take me there</Button>
                </Stack>
            </Group>
        </Stack>
    </Card>
}

