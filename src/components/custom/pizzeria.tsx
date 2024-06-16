import { Badge, Card, Group, Text, Rating, Stack, ActionIcon, Button } from "@mantine/core";
import { MdDirections } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";

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
    return <Card shadow="sm" padding="sm" radius="md" w={props.isNearby ? "60vw" : "40vw"} miw={"360px"} maw={"800px"} withBorder>
        <Stack gap={10}>
            <Group justify="space-between">
                <Group>
                <Text component="a" href={data.websiteUrl} target="_blank" size="xl" ff={"text"} c={props.isNearby ? "red" : "white"} fw={props.isNearby ? "bold" : 200}>{data.name}</Text>
                {props.isNearby && <Text size="12px" ff={"text"} c={"white"} fw={props.isNearby ? "bold" : 200}>Only {Math.round(props.distanceMt!)} meters away from you!</Text>}
                </Group>
                <Stack align="center">
                    <Rating value={data.rating / 2} fractions={2} readOnly />
                    <Text c="white" size="xs" fw={500}>{data.rating}/10</Text>
                </Stack>
            </Group>
            <Group align="center" justify="space-between">
            <Stack align="left" justify="center">
                <Group gap={5} justify="left" align="top">
                <FaLocationPin size={12} color="white"/>
                <Text c="white" size="sm" fw={500}>{data.city},</Text>
                <Text c="white" size="sm" fw={500}>{data.nation}</Text>
                </Group>
                <Group gap={5}>
                <Text c="white" size="sm" fw={500}>Must try:</Text>
                <Text c="red" size="sm" fw={500}>{data.mustTry}</Text>
                </Group>
            </Stack>
                <Stack align="center" justify="center">
                    <Button component="a" href={data.locationUrl} target="_blank" color="yellow" size="xs" rightSection={<MdDirections size={14} />}>Take me there</Button>
                </Stack>
            </Group>
        </Stack>
    </Card>
}

