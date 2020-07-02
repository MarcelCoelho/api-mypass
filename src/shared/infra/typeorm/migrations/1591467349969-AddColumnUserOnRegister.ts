import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnUserOnRegister1591467349969 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'registers',
            new TableColumn({
                name: 'user',
                type: 'varchar',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('registers', 'user');
    }

}
