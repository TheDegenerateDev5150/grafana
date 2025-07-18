import { Trans, t } from '@grafana/i18n';
import { Button, Icon, Spinner, Text } from '@grafana/ui';

import { CTAInfo } from './CTAInfo';

interface SnapshotCTAProps {
  disabled: boolean;
  isLoading: boolean;
  onClick: () => void;
}

// TODO: this can be removed with the new configuration flow merged.
export function BuildSnapshotCTA(props: SnapshotCTAProps) {
  const { disabled, isLoading, onClick } = props;

  return (
    <CTAInfo
      title={t('migrate-to-cloud.build-snapshot.title', 'No snapshot exists')}
      accessory={<Icon name="cog" size="lg" />}
    >
      <Text element="p" variant="body" color="secondary">
        <Trans i18nKey="migrate-to-cloud.build-snapshot.description">
          This tool can migrate some resources from this installation to your cloud stack. To get started, you&apos;ll
          need to create a snapshot of this installation. Creating a snapshot typically takes less than two minutes. The
          snapshot is stored alongside this Grafana installation.
        </Trans>
      </Text>

      <Text element="p" variant="body" color="secondary">
        <Trans i18nKey="migrate-to-cloud.build-snapshot.when-complete">
          Once the snapshot is complete, you will be able to upload it to your cloud stack.
        </Trans>
      </Text>

      <Button
        disabled={disabled}
        onClick={onClick}
        icon={isLoading ? 'spinner' : undefined}
        data-testid="migrate-to-cloud-configure-snapshot-build-snapshot-button"
      >
        <Trans i18nKey="migrate-to-cloud.summary.start-migration">Build snapshot</Trans>
      </Button>
    </CTAInfo>
  );
}

export function CreatingSnapshotCTA(props: SnapshotCTAProps) {
  const { disabled, isLoading, onClick } = props;

  return (
    <CTAInfo title={t('migrate-to-cloud.building-snapshot.title', 'Building snapshot')} accessory={<Spinner inline />}>
      <Text element="p" variant="body" color="secondary">
        <Trans i18nKey="migrate-to-cloud.building-snapshot.description">
          We&apos;re gathering your resources for migration to Grafana Cloud. This should only take a moment.
        </Trans>
      </Text>

      <Button disabled={disabled} onClick={onClick} icon={isLoading ? 'spinner' : undefined} variant="secondary">
        <Trans i18nKey="migrate-to-cloud.summary.cancel-snapshot">Cancel snapshot</Trans>
      </Button>
    </CTAInfo>
  );
}
