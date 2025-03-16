export const dockerizeKafkaCodes = [
	{
		id: 'dockerize-kafka',
		name: 'Dockerize Kafka',
		codeBlocks: [
			
            {
				name: 'docker-compose.yml',
				language: 'yaml',
				code: `    
    services:
        zookeeper:
            image: confluentinc/cp-zookeeper:latest
            container_name: zookeeper
            restart: always
            environment:
                ZOOKEEPER_CLIENT_PORT: 2181
                ZOOKEEPER_TICK_TIME: 2000
            ports:
                - "2181:2181"

        kafka:
            image: confluentinc/cp-kafka:latest
            container_name: kafka
            restart: always
            depends_on:
                - zookeeper
            ports:
                - "9092:9092"
            environment:
                KAFKA_BROKER_ID: 1
                KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
                KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9092
                KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
                KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1

        kafka-ui:
            image: provectuslabs/kafka-ui:latest
            container_name: kafka-ui
            restart: always
            depends_on:
                - kafka
            ports:
                - "8080:8080"
            environment:
                KAFKA_CLUSTERS_0_NAME: local
                KAFKA_CLUSTERS_0_BOOTSTRAP_SERVERS: kafka:9092`,
			},
		],
	},
];
