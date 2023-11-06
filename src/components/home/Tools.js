
import { Container, NumPodcast, Form, Input } from "../styles/ToolsStyles"

const Tools = ({handleChange,qty}) => {
    return(
        <Container>
            <NumPodcast>{qty}</NumPodcast>
            <Form>
                <Input
                    type="text"
                    placeholder="Filter podcasts..."
                    onChange={handleChange}
                />
            </Form>
        </Container>
    )
}

export default Tools